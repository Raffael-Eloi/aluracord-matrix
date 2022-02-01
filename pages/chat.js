import { Box, Text, TextField, Image, Button } from '@skynexui/components'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import appConfig from '../config.json'
import { createClient } from '@supabase/supabase-js'
import { ButtonSendSticker } from '../src/components/ButtonSendSticker.js'

const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM2MjY5NiwiZXhwIjoxOTU4OTM4Njk2fQ.HRKrPNhodDXy82xCVchmOqWxKZR7WwLBrjU2KEQAYAU'
const SUPABASE_URL = 'https://hcjrjtkmzciowzbrvios.supabase.co'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default function ChatPage() {
  const roteamento = useRouter()
  const loggedUser = roteamento.query.username
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([
    // {
    //   id: 1,
    //   from: 'Raffael-Eloi',
    //   text: ':sticker:https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png'
    // },
    // {
    //   id: 2,
    //   from: 'Raffael-Eloi',
    //   text: ':sticker:https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png'
    // }
  ])

  useEffect(() => {
    supabaseClient
      .from('mensagens') // banco de dados
      .select('*') // campos
      .order('id', { ascending: false })
      .then(({ data }) => {
        setMessageList(data)
      })
    messageListnerRealTime(newMessage => {
      console.log('MessageListnerRealTime: ', newMessage)
      setMessageList(currentListValue => {
        return [newMessage, ...currentListValue]
      })
    })
  }, [])

  function messageListnerRealTime(addMessage) {
    return supabaseClient
      .from('mensagens')
      .on('INSERT', liveResponse => {
        addMessage(liveResponse)
      })
      .subscribe()
  }

  function handleChange(event) {
    setMessage(event.target.value)
  }

  function handleNewMessage(newMessage) {
    const messageComplete = {
      // id: messageList.length + 1,
      from: loggedUser,
      text: newMessage
    }

    supabaseClient
      .from('mensagens')
      .insert([messageComplete])
      .then(({ data }) => {
        console.log('Criando mensagem: ', data)
      })
    setMessage('')
  }

  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000']
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: '100%',
          maxWidth: '95%',
          maxHeight: '95vh',
          padding: '32px'
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px'
          }}
        >
          <MessageList messages={messageList} />
          <Box
            as="form"
            styleSheet={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <TextField
              placeholder="Insira sua mensagem aqui..."
              value={message}
              onChange={event => handleChange(event)}
              onKeyPress={event => {
                if (event.key == 'Enter') {
                  event.preventDefault()
                  handleNewMessage(message)
                }
              }}
              styleSheet={{
                width: '70%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '8px 8px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200]
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              onClick={event => {
                event.preventDefault()
                handleNewMessage(message)
              }}
              styleSheet={{
                marginRight: '12px'
              }}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600]
              }}
            />

            {/* Callback */}
            <ButtonSendSticker
              onStickerClick={sticker => {
                console.log('[USANDO O COMPONENT] Salva esse sticker no banco')
                handleNewMessage(':sticker: ' + sticker)
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  )
}

function MessageList(props) {
  function handleDeleteMessage(messageForDelete) {
    // props.setMessageList(messageList.splice(messageForDelete - 1, 1))
  }

  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px'
      }}
    >
      {props.messages.map(currentMessage => {
        return (
          <Text
            key={currentMessage.id}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700]
              }
            }}
          >
            <Box
              styleSheet={{
                marginBottom: '8px'
              }}
            >
              <Image
                styleSheet={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '8px'
                }}
                src={`https://github.com/${currentMessage.from}.png`}
              />
              <Text tag="strong">{currentMessage.from}</Text>
              <Text
                styleSheet={{
                  fontSize: '10px',
                  marginLeft: '8px',
                  color: appConfig.theme.colors.neutrals[300]
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {/* Declarativo  */}
            {currentMessage.text.startsWith(':sticker:') ? (
              <Image src={currentMessage.text.replace(':sticker:', '')} />
            ) : (
              currentMessage.text
            )}
            <Button
              type="submit"
              label="Excluir"
              onClick={event => {
                event.preventDefault()
                console.log({ currentMessage })
                // console.log(currentMessage.parentChild)
                handleDeleteMessage(currentMessage)
              }}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: 'red',
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600]
              }}
            />
          </Text>
        )
      })}
    </Box>
  )
}
