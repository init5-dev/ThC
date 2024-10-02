import AuthenticationWrapper from "@/app/lib/components/AuthenticationWrapper"
import MarkdownEditor from "../../lib/components/CMS/MarkdownEditor"

const MarkdownEditorPage = () => {
  return <AuthenticationWrapper>
    <MarkdownEditor />
  </AuthenticationWrapper>
}

export default MarkdownEditorPage