'use client'

export function PageActions(): JSX.Element {
  const handlePostClick = async (): Promise<void> => {
    await fetch('/api/test-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ foo: 'bar' }),
    })
  }

  const handleGetClick = async (): Promise<void> => {
    await fetch('/api/test-get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <button
        onClick={() => {
          void handlePostClick()
        }}
      >
        Test POST API Call
      </button>
      <button
        onClick={() => {
          void handleGetClick()
        }}
      >
        Test GET API Call
      </button>
    </div>
  )
}
