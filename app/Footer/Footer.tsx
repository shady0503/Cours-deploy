import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const MinimalFooter = () => {
  return (
    <footer className="bg-bgpurple text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="/assets/logo/Logo.svg"
            alt="Algorithmics Logo"
            className="h-8"
          />
          <span className="text-xl font-semibold">Shady</span>
        </div>

        {/* Contact text */}
        <p className="text-center text-sm mb-4">
          Si vous avez des questions ou des suggestions,&nbsp;
          <Link
            href="https://wa.me/33669498768"
            className="underline hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            écrivez-nous sur WhatsApp
          </Link>
          &nbsp;ou téléphonez-nous au&nbsp;
          <a href="tel:0669498768" className="underline hover:text-gray-200">
            06 69 49 87 68
          </a>
        </p>

        {/* Social icons */}
        <div className="flex space-x-4 mb-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href="https://wa.me/33669498768"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaWhatsapp size={20} />
          </Link>
        </div>

        {/* Privacy & Copyright */}
        <div className="flex flex-col items-center space-y-2">
          <Link
            href="/privacy"
            className="text-sm hover:text-gray-200"
          >
            Politique et protection des données personnelles
          </Link>
          <span className="text-sm">
            © 2023-2025 Shady
          </span>
        </div>
      </div>
    </footer>
  )
}

export default MinimalFooter
