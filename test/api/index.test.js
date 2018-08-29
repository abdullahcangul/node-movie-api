const chai=require("chai")
const chaiHttp=require("chai-http")
const should=chai.should()
const server=require("../../app")

chai.use(chaiHttp)

describe("Node Server",()=>{//acıklama yazılır
    it('(GET/) sayfasını döndürür',(done)=>{
        chai.request(server)//server a sorgu yapıldı
        .get("/")//localhost:3000 e istek yapılacak
        .end((err,res)=>{//islem bittikten sonra
            res.should.have.status(200)//status kod 2000 e sahip olmalı
            done()
        })
    })
})