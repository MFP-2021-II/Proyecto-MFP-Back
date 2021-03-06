const request = require("supertest")
const Server = require("../../server")
const app = new Server().app

let token = null

describe("Imagenes_anuncio Routes", () => {
  beforeAll((done) => {
    request(app)
      .post("/api/usuarios/login")
      .send({
        correo: "raillyhugo@gmail.com",
        contraseña: "Contra123",
      })
      .end((err, res) => {
        token = res.body.token
        done()
      })
  })

  it("Post route /imagenes_anuncio with status 200", async () => {
    const response = await request(app)
      .post("/api/imagenes_anuncio")
      .set("Authorization", `Bearer ${token}`)
      .send({
        imagen: "https://i.imgur.com/w0YzZ6c.jpg",
        id_anuncio: 1,
      })
      .expect(200)
  })

  it("Get route /imagenes_anuncio with status 200", async () => {
    const response = await request(app)
      .get("/api/imagenes_anuncio")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
  })
})
