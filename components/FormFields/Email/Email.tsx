import { useEffect, useState } from 'react'

function EmailField({
  errorMsg,
  register,
  labelStyle,
  half,
  setValue,
}: {
  errorMsg: string | undefined
  register: any
  labelStyle: string
  half?: boolean
  setValue: any
}) {
  const [focus, setFocus] = useState(false)
  const [input, setInput] = useState<string | null>('')

  useEffect(() => {
    if (window.localStorage.getItem('signUpEmail')) setInput(window.localStorage.getItem('signUpEmail'))
  }, [])

  return (
    <div className="inputWrapper relative w-full">
      <div>
        <label
          htmlFor="00N4v00000C2nYW"
          className={`pointer-events-none absolute ml-3 mt-4 cursor-text uppercase transition-all duration-500 md:mt-0 ${
            focus
              ? `${
                  labelStyle === 'inside'
                    ? '-left-1 -top-3 md:left-0 md:top-0'
                    : 'bg-form -top-5 left-1 md:-top-1 md:left-3'
                } text-[.656rem] text-black md:text-[.7878rem]`
              : `${labelStyle === 'inside' ? 'top-0 md:top-3' : 'top-0 md:top-5'} left-2 text-2xl  text-black  ${
                  input !== '' && 'opacity-0'
                }`
          }`}
        >
          Email*
        </label>
        <input
          id="003"
          aria-describedby="emailError"
          className={`formInput font-futura w-full border-2 border-black py-3 px-5 text-2xl text-black outline-[#F7941D] ${
            labelStyle === 'inside' ? 'bg-formInput py-3 md:py-4' : 'bg-form py-2 md:py-3'
          }`}
          onFocus={() => {
            setFocus(true)
          }}
          onBlurCapture={() => {
            setFocus(false)
          }}
          {...register}
          onChange={(e) => {
            setInput(e.target.value)
            setValue('email', e.target.value)
          }}
          value={input}
        />
      </div>
      {errorMsg && (
        <span id="emailError" role="alert" className="w-full text-center text-sm text-red-600">
          {errorMsg}
        </span>
      )}
    </div>
  )
}

export default EmailField