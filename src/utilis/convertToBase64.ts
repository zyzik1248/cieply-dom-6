export async function toBase64(filePath : string) { 
    const response = await fetch(filePath) 
    const buffer = await response.arrayBuffer()
    return Buffer.from(buffer).toString('base64');
  }