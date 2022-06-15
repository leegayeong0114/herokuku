const express = require('express') 
const app = express() // express 객체 생성

const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000

const path = require('path')

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/build')))
// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

app.use('/api/data', (req, res) => res.json({data: 'data', port: PORT}))

app.listen(PORT, () => {
  console.log(`server running port : ${PORT}!!`)
})