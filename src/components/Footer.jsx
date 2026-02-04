const Footer = () => (
  <footer className="py-12 px-6 bg-black text-white text-center">
    <p className="mb-4">&copy; {new Date().getFullYear()} Mrs Black Owned. All rights reserved.</p>
    <div className="flex justify-center gap-6">
      <a href="#" className="hover:underline">Instagram</a>
      <a href="#" className="hover:underline">Twitter</a>
      <a href="#" className="hover:underline">LinkedIn</a>
    </div>
  </footer>
)

export default Footer
