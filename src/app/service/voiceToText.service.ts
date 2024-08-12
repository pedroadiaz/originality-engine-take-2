import { useEffect, useMemo, useRef, useState } from 'react'

interface Options {
    lang?: string
    continuous?: boolean
  }

const useVoiceToText = ({ lang, continuous }: Options = { lang: 'en-US', continuous: true }) => {
  const [transcript, setTranscript] = useState('')
  const isContinuous = useRef(continuous ?? true)

  const SpeechRecognition = useMemo(() => {
    if (typeof window === 'undefined') {
      return null
    }
    const { webkitSpeechRecognition, SpeechRecognition } = window as any
    return SpeechRecognition || webkitSpeechRecognition
  }, [])

  const recognition = useMemo(() => {
    if (SpeechRecognition) return new SpeechRecognition()
    else return null
  }, [SpeechRecognition])

  useEffect(() => {
    if (lang && recognition) {
      recognition.lang = lang
    }
  }, [lang, recognition])

  function startListening() {
    if (!recognition) return
    recognition.start()
    if (continuous) {
      isContinuous.current = true
    }
  }

  function stopListening() {
    if (!recognition) return
    recognition.stop()
    isContinuous.current = false
  }

  function clearTranscript() {
    setTranscript('');
  }

  if (recognition) {
    recognition.onend = () => {
      if (isContinuous.current) {
        // if the listening is continuous, it starts listening even the speaker is quiet till it will be stopped manually
        startListening()
      }
    }
    recognition.onerror = (event: any) => {
      console.error(`Speech recognition error detected: ${event.error}`)
    }

    recognition.onresult = (event: any) => {
      console.log('onresult: ', event);
        setTranscript((prevTranscript) => prevTranscript + ' ' + event.results[0][0].transcript);
    }
  }

  return { startListening, stopListening, transcript, clearTranscript }
}

export default useVoiceToText