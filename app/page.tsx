"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { QrCode, Heart, Sparkles, ImageIcon, Video, FileText, Mail, Phone, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"

export default function EternaConexion() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsMusicPlaying(!isMusicPlaying)
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Ambient Music */}
      <audio ref={audioRef} loop>
        <source src="/ambient-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Toggle Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
        aria-label={isMusicPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isMusicPlaying ? (
          <Volume2 className="w-5 h-5 text-slate-600" />
        ) : (
          <VolumeX className="w-5 h-5 text-slate-400" />
        )}
      </button>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <QrCode className="w-6 h-6 text-indigo-400" />
              <span className="text-xl font-semibold text-slate-800">Eterna Conexión</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-sm text-slate-600 hover:text-indigo-500 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-sm text-slate-600 hover:text-indigo-500 transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-sm text-slate-600 hover:text-indigo-500 transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-sm text-slate-600 hover:text-indigo-500 transition-colors"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="text-sm text-slate-600 hover:text-indigo-500 transition-colors"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm text-slate-600 hover:text-indigo-500 transition-colors"
              >
                Preguntas Frecuentes
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-sm text-slate-600 hover:text-indigo-500 transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <img src="/serene-peaceful-sky-with-soft-clouds-and-gentle-li.jpg" alt="Peaceful sky" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center justify-center p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
            <QrCode className="w-12 h-12 text-indigo-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 text-balance">Eterna Conexión</h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
            Creamos páginas conmemorativas únicas con código QR para recordar y honrar a quienes amamos
          </p>
          <Button
            size="lg"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="https://tuservicioeternaconexion.com/pedido">Pide tu página ahora</Link>
          </Button>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center justify-center p-3 bg-indigo-50 rounded-full">
            <Heart className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Nosotros</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Eterna Conexión ofrece un servicio que une la tecnología con la memoria y el amor, permitiendo a las
            familias crear espacios digitales en homenaje a sus seres queridos. Creemos que cada vida merece ser
            recordada de manera única y especial, y nuestra misión es proporcionar una forma moderna y accesible de
            mantener viva la memoria de quienes ya no están con nosotros.
          </p>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md">
              <Sparkles className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-slate-600">Elige el servicio que mejor honre la memoria de tu ser querido</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Servicio Básico */}
            <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mb-4 inline-flex items-center justify-center p-4 bg-indigo-50 rounded-full mx-auto">
                  <FileText className="w-10 h-10 text-indigo-400" />
                </div>
                <CardTitle className="text-2xl text-slate-800">Página Conmemorativa Básica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-slate-600 text-center mb-6">
                  Un espacio digital elegante para honrar la memoria
                </CardDescription>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>Biografía personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ImageIcon className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>Galería de fotos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>Videos conmemorativos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <QrCode className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>Código QR personalizado</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full" asChild>
                  <Link href="https://tuservicioeternaconexion.com/pedido">Solicitar ahora</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Servicio Mejorado con IA */}
            <Card className="border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-indigo-50/30 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                Recomendado
              </div>
              <CardHeader className="text-center pb-4">
                <div className="mb-4 inline-flex items-center justify-center p-4 bg-indigo-100 rounded-full mx-auto">
                  <Sparkles className="w-10 h-10 text-indigo-500" />
                </div>
                <CardTitle className="text-2xl text-slate-800">Página Conmemorativa con IA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-slate-600 text-center mb-6">
                  Tecnología avanzada para un homenaje excepcional
                </CardDescription>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Biografía personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ImageIcon className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Fotos optimizadas con IA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Videos mejorados con IA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <QrCode className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Código QR personalizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Efectos visuales premium</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-md"
                  asChild
                >
                  <Link href="https://tuservicioeternaconexion.com/pedido">Solicitar ahora</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center justify-center p-3 bg-indigo-50 rounded-full">
              <ImageIcon className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Galería</h2>
            <p className="text-lg text-slate-600">Ejemplos de nuestro trabajo</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <img
                src="/peaceful-sunset-over-calm-water.jpg"
                alt="Ejemplo 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <img
                src="/white-flowers-in-soft-light.jpg"
                alt="Ejemplo 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <img
                src="/qr-code-on-memorial-stone-with-flowers.jpg"
                alt="Ejemplo 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <img
                src="/candles-and-soft-light-peaceful-atmosphere.jpg"
                alt="Ejemplo 4"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <img
                src="/peaceful-garden-with-soft-morning-light.jpg"
                alt="Ejemplo 5"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <img
                src="/memorial-page-on-tablet-with-elegant-design.jpg"
                alt="Ejemplo 6"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="testimonios" className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md">
              <Heart className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Testimonios</h2>
            <p className="text-lg text-slate-600">Lo que dicen nuestras familias</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 shadow-md bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/professional-portrait-bw.png"
                    alt="María González"
                    className="w-14 h-14 rounded-full object-cover grayscale"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">María González</p>
                    <p className="text-sm text-slate-500">Madrid</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  "Un servicio excepcional que nos permitió honrar la memoria de mi padre de una manera moderna y
                  hermosa. El código QR en su lápida es un detalle que toda la familia aprecia."
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-md bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/professional-man-bw-portrait.png"
                    alt="Carlos Ruiz"
                    className="w-14 h-14 rounded-full object-cover grayscale"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Carlos Ruiz</p>
                    <p className="text-sm text-slate-500">Barcelona</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  "La página conmemorativa con IA superó todas nuestras expectativas. Las fotos y videos quedaron
                  preciosos. Es un regalo para toda la familia poder recordar a mamá así."
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-md bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/professional-woman-portrait-black-and-white.jpg"
                    alt="Ana Martínez"
                    className="w-14 h-14 rounded-full object-cover grayscale"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Ana Martínez</p>
                    <p className="text-sm text-slate-500">Valencia</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  "Profesionales, empáticos y con un resultado impecable. La página es elegante y fácil de compartir con
                  familiares que viven lejos. Muy recomendable."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Preguntas Frecuentes</h2>
            <p className="text-lg text-slate-600">Resolvemos tus dudas</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left text-slate-800 hover:text-indigo-500">
                ¿Cómo funciona el servicio?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Nos envías la información, fotos y videos de tu ser querido. Nuestro equipo crea una página web
                conmemorativa personalizada y genera un código QR único que puedes colocar en la lápida, marco de fotos
                o cualquier lugar especial. Al escanear el código, se accede directamente a la página.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-slate-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left text-slate-800 hover:text-indigo-500">
                ¿Qué incluye la página conmemorativa?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                La página incluye una biografía personalizada, galería de fotos, videos, fechas importantes y un diseño
                elegante y respetuoso. En la versión con IA, optimizamos las imágenes y videos para obtener la mejor
                calidad posible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left text-slate-800 hover:text-indigo-500">
                ¿Cómo se integra el código QR?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Te enviamos el código QR en formato digital y físico (placa resistente a la intemperie). Puedes
                colocarlo en la lápida, en un marco conmemorativo, o en cualquier lugar que desees. El código es
                permanente y no caduca.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-slate-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left text-slate-800 hover:text-indigo-500">
                ¿Puedo actualizar la información después?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Sí, puedes solicitar actualizaciones en cualquier momento. Añadir nuevas fotos, videos o modificar el
                contenido es sencillo. Contáctanos y nos encargamos de todo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-slate-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left text-slate-800 hover:text-indigo-500">
                ¿Cuánto tiempo tarda el proceso?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                El proceso completo toma entre 3 y 5 días hábiles desde que recibimos toda la información. Trabajamos
                con cuidado y atención al detalle para asegurar que el resultado sea perfecto.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-indigo-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md">
            <QrCode className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Contacto</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte a crear un homenaje único y especial. Contáctanos y comencemos a honrar la
            memoria de tu ser querido.
          </p>

          <Button
            size="lg"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
            asChild
          >
            <Link href="https://tuservicioeternaconexion.com/pedido">Pide tu página ahora</Link>
          </Button>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Link
              href="https://wa.me/1234567890"
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-500 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp</span>
            </Link>
            <Link
              href="mailto:contacto@eternaconexion.com"
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </Link>
            <Link
              href="https://instagram.com/eternaconexion"
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </Link>
            <Link
              href="https://facebook.com/eternaconexion"
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <QrCode className="w-6 h-6 text-indigo-400" />
            <span className="text-xl font-semibold">Eterna Conexión</span>
          </div>
          <p className="text-slate-400 mb-4">© 2025 Eterna Conexión — Recordamos con amor y tecnología.</p>
          <Link
            href="https://github.com/eternaconexion"
            className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}
