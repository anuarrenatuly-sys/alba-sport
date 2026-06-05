export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({
        message: "Method not allowed",
      })
    }
  
    const BOT_TOKEN = "8646007488:AAFacsxXs5UB0kF1xLE-AhSQ2hOuO83I54s"
    const CHAT_ID = "5594857511"
  
    const { message } = req.body
  
    await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      }
    )
  
    res.status(200).json({
      success: true,
    })
  }