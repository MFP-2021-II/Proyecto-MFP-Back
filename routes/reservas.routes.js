const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { BODY } = require("../utils/constants")
const ReservationService = require("../services/reservas.service")
const validateJWT = require("../middlewares/validateJWT.handler")
const { createReservationSchema } = require("../schemas/reservas.schema")

// User Routes
router.post(
  "/",
  validatorHandler(createReservationSchema, BODY),
  validateJWT,
  async (req, res) => {
    const { id } = req.user
    const reservation = await ReservationService.create({
      ...req.body,
      id_usuario: id,
    })

    res.status(201).send({
      data: reservation,
      message: "Reserva creada con éxito",
      ok: true,
    })
  }
)

router.get("/realizadas", validateJWT, async (req, res) => {
  console.log(req.user)
  const { id } = req.user
  const reservation = await ReservationService.getByUser(id)

  res.status(200).send({
    data: reservation || [],
    message: "Reservas obtenidas con éxito",
    ok: true,
  })
})

router.get("/recibidas", validateJWT, async (req, res) => {
  const { id } = req.user
  const reservation = await ReservationService.getByUserReceived(id)

  res.status(200).send({
    data: reservation || [],
    message: "Reservas obtenidas con éxito",
    ok: true,
  })
})

module.exports = router

// Generatio large documentation for this file

/**
 * @swagger
 * /api/v1/alojamientos:
 *  post:
 *     tags:
 *       - Alojamientos
 *     description: Crea un alojamiento
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: alojamiento
 *         description: alojamiento que se va a crear
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Alojamiento'
 *     responses:
 *       200:
 *         description: alojamiento creado exitosamente
 *         schema:
 *           $ref: '#/definitions/Alojamiento'
 *       400:
 *         description: Error al crear el alojamiento
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:
 *         description: No autorizado
 *         schema:
 *           $ref: '#/definitions/Error'
 */

/**
 * @swagger
 * /api/v1/alojamientos:
 *   get:
 *     tags:
 *       - Alojamientos
 *     description: Obtiene todos los alojamientos
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: alojamientos obtenidos exitosamente
 *         schema:
 *           $ref: '#/definitions/Alojamiento'
 *       400:
 *         description: Error al obtener los alojamientos
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:
 *         description: No autorizado
 *         schema:
 *           $ref: '#/definitions/Error'
 */

/**
 * @swagger
 * /api/v1/alojamientos/{id}:
 *   get:
 *     tags:
 *       - Alojamientos
 *     description: Obtiene un alojamiento
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id del alojamiento
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: alojamiento obtenido exitosamente
 *         schema:
 *           $ref: '#/definitions/Alojamiento'
 *       400:
 *         description: Error al obtener el alojamiento
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:    parameters:
 *        description: No autorizado
 *        schema:
 *         $ref: '#/definitions/Error'
 *      404:
 *       description: No se encontró el alojamiento
 *      schema:
 *      $ref: '#/definitions/Error'
 *  put:
 *     - Alojamientos
 *    description: Actualiza un alojamiento
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: id del alojamiento
 *        in: path
 *        required: true
 *        type: string
 *      - name: alojamiento
 *        description: alojamiento que se va a actualizar
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/definitions/Alojamiento'
 *    responses:
 *      200:
 *        description: alojamiento actualizado exitosamente
 *        schema:
 *          $ref: '#/definitions/Alojamiento'
 *      400:
 *        description: Error al actualizar el alojamiento
 *        schema:
 *          $ref: '#/definitions/Error'
 *      401:
 *        description: No autorizado
 *        schema:
 *          $ref: '#/definitions/Error'
 *  delete:
 *    tags:
 *      - Alojamientos
 *    description: Elimina un alojamiento
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: id del alojamiento
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: alojamiento eliminado exitosamente
 *      400:
 *        description: Error al eliminar el alojamiento
 *        schema:
 *          $ref: '#/definitions/Error'
 *      401:
 *        description: No autorizado
 *        schema:
 *          $ref: '#/definitions/Error'
 */
