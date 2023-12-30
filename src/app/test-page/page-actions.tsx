'use client'

export function PageActions(): JSX.Element {
  const handleClick = async (): Promise<void> => {
    await fetch('/api/test-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ foo: 'bar' }),
    })
  }
  return (
    <div>
      <button
        onClick={() => {
          void handleClick()
        }}
      >
        Test API Call
      </button>
    </div>
  )
}
