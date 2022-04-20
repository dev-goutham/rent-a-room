const base64Converter = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((res, rej) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      res(reader.result)
    }

    reader.onerror = (error) => {
      rej(error)
    }
  })
}

export default base64Converter
