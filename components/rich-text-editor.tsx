"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import TextAlign from "@tiptap/extension-text-align"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bold,
  Italic,
  UnderlineIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ImageIcon,
  TableIcon,
  Link2,
  List,
  ListOrdered,
  Quote,
} from "lucide-react"

interface RichTextEditorProps {
  placeholder?: string
  onChange?: (html: string) => void
  initialContent?: string
}

export function RichTextEditor({
  placeholder = "Введите текст...",
  onChange,
  initialContent = "",
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image,
      Link,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className="border border-[#EBEBEA] rounded-md">
      {/* Rich text editor toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-[#EBEBEA] bg-[#F7F7F7]">
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 text-[#6B6B6B] hover:bg-white rounded ${
            editor.isActive("bold") ? "bg-white text-[#2383E2]" : ""
          }`}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 text-[#6B6B6B] hover:bg-white rounded ${
            editor.isActive("italic") ? "bg-white text-[#2383E2]" : ""
          }`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 text-[#6B6B6B] hover:bg-white rounded ${
            editor.isActive("underline") ? "bg-white text-[#2383E2]" : ""
          }`}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-[#EBEBEA] mx-1"></div>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 text-[#6B6B6B] hover:bg-white rounded ${
            editor.isActive({ textAlign: "left" }) ? "bg-white text-[#2383E2]" : ""
          }`}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 text-[#6B6B6B] hover:bg-white rounded ${
            editor.isActive({ textAlign: "center" }) ? "bg-white text-[#2383E2]" : ""
          }`}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 text-[#6B6B6B] hover:bg-white rounded ${
            editor.isActive({ textAlign: "right" }) ? "bg-white text-[#2383E2]" : ""
          }`}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-[#EBEBEA] mx-1"></div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-[#6B6B6B] hover:bg-white rounded"
          onClick={() => {
            const url = window.prompt("URL изображения")
            if (url) {
              editor.chain().focus().setImage({ src: url }).run()
            }
          }}
        >
          <ImageIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-[#6B6B6B] hover:bg-white rounded"
          onClick={() => {
            // Simple table insertion - removed as Table extension is not included
            alert("Функция добавления таблицы временно недоступна")
          }}
        >
          <TableIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 text-[#6B6B6B] hover:bg-white rounded ${
            editor.isActive("link") ? "bg-white text-[#2383E2]" : ""
          }`}
          onClick={() => {
            const url = window.prompt("URL")
            if (url) {
              editor.chain().focus().setLink({ href: url }).run()
            } else {
              editor.chain().focus().unsetLink().run()
            }
          }}
        >
          <Link2 className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-[#EBEBEA] mx-1"></div>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 text-[#6B6B6B] hover:bg-white rounded ${
            editor.isActive("bulletList") ? "bg-white text-[#2383E2]" : ""
          }`}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 text-[#6B6B6B] hover:bg-white rounded ${
            editor.isActive("orderedList") ? "bg-white text-[#2383E2]" : ""
          }`}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 text-[#6B6B6B] hover:bg-white rounded ${
            editor.isActive("blockquote") ? "bg-white text-[#2383E2]" : ""
          }`}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-[#EBEBEA] mx-1"></div>
        <Select
          defaultValue="paragraph"
          onValueChange={(value) => {
            if (value === "paragraph") {
              editor.chain().focus().setParagraph().run()
            } else if (value.startsWith("heading")) {
              const level = Number.parseInt(value.replace("heading", ""))
              editor.chain().focus().toggleHeading({ level }).run()
            }
          }}
        >
          <SelectTrigger className="h-8 min-w-[100px] border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
            <SelectValue placeholder="Шрифт" />
          </SelectTrigger>
          <SelectContent className="bg-white border-[#EBEBEA]">
            <SelectItem value="paragraph" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
              Обычный текст
            </SelectItem>
            <SelectItem value="heading1" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
              Заголовок 1
            </SelectItem>
            <SelectItem value="heading2" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
              Заголовок 2
            </SelectItem>
            <SelectItem value="heading3" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
              Заголовок 3
            </SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="normal">
          <SelectTrigger className="h-8 min-w-[60px] border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
            <SelectValue placeholder="Размер" />
          </SelectTrigger>
          <SelectContent className="bg-white border-[#EBEBEA]">
            <SelectItem value="small" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
              Маленький
            </SelectItem>
            <SelectItem value="normal" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
              Обычный
            </SelectItem>
            <SelectItem value="large" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
              Большой
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <EditorContent editor={editor} className="min-h-[200px] p-3 focus:outline-none prose prose-sm max-w-none" />
    </div>
  )
}
