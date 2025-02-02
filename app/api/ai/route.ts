import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: Request) {
  if (!API_KEY) {
    return NextResponse.json({ error: "API Key is missing" }, { status: 500 });
  }

  try {
    const { message, history,context } = await req.json(); // Receive message + history

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const chatSession = model.startChat({
      history: history || [], // Use existing history or start fresh
    });

    const result = await chatSession.sendMessage(message);

    // Append new message to history
    const newHistory = [...(history || []), { role: "user", parts: [{ text: message }] }, { role: "model", parts: [{ text: result.response.text() }] }];

    return NextResponse.json({ response: result.response.text(), history: newHistory });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}