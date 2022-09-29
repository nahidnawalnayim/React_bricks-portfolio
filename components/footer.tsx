const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          
          <div className="uppercase text-sm tracking-wider"></div>
        </div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{' '}
         All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
