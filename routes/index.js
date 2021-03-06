const express = require("express")
const router = express.Router()

const user = require("./usuario.routes")
const accommodationType = require("./tipo_alojamiento.routes")
const accommodation = require("./alojamiento.routes")
const features = require("./caracteristicas.routes")
const announcement = require("./anuncio.routes")
const imgsAnnouncement = require("./imagenes_anuncio.routes")
const favorites = require("./favoritos.routes")
const commentaries = require("./comentarios.routes")
const reservations = require("./reservas.routes")

router.use("/usuarios", user)
router.use("/tipo_alojamiento", accommodationType)
router.use("/alojamiento", accommodation)
router.use("/caracteristicas", features)
router.use("/anuncio", announcement)
router.use("/imagenes_anuncio", imgsAnnouncement)
router.use("/favoritos", favorites)
router.use("/comentarios", commentaries)
router.use("/reservas", reservations)

module.exports = router
