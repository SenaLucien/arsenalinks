import './globals.css'

export const metadata = {
  title: 'Arsena Bio - Modern Linktree Generator',
  description: 'Create your custom link bio page with dark aesthetic',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
