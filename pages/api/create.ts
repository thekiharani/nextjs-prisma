import { prisma } from 'lib/prisma'

const handler = async (req, res) => {
  const { name, email, message, feedbackType } = req.body
  try {
    const submission = await prisma.feedback.create({
      data: { name, email, message, feedbackType },
    })

    return res.status(201).json({ message: 'submitted', submission })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export default handler
