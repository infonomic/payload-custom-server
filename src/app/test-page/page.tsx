import { PageActions } from './page-actions'
export default async function TestPage() {
  return (
    <div style={{ padding: '16px' }}>
      <p>Some text here...</p>
      <PageActions />
    </div>
  )
}
