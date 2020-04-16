import { MARKDOWN_TEXT } from "./type"

export const markdownText = (text) => {
  return {
    type: MARKDOWN_TEXT,
    editorText: text
  }
}