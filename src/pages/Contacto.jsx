import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar a Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          asunto: formData.asunto,
          mensaje: formData.mensaje,
          _replyto: formData.email,
          _subject: `Nuevo contacto: ${formData.asunto}`
        })
      });

      if (response.ok) {
        toast({
          title: '¡Mensaje enviado!',
          description: 'Nos pondremos en contacto contigo pronto.',
        });
        
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: ''
        });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#D4AF37]">Contáctanos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Estamos aquí para ayudarte a alcanzar tus objetivos
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Puedes contactarnos a través de cualquiera de los siguientes medios. 
                Nuestro equipo estará encantado de atenderte.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#D4AF37] p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a 
                      href="mailto:info@ldholdingsgroup.org" 
                      className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      info@ldholdingsgroup.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#D4AF37] p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                    <a 
                      href="tel:+573177848600" 
                      className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      +57 317 7848600
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#D4AF37] p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Dirección</h3>
                    <p className="text-gray-600">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-black to-gray-900 text-white rounded-xl">
                <h3 className="text-xl font-bold mb-3">Horario de Atención</h3>
                <p className="text-gray-300 mb-2">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Sábados: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                      placeholder="+57 123 456 7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-semibold mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                      placeholder="Motivo de tu consulta"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-semibold mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D4AF37] text-black px-6 py-4 rounded-lg font-semibold hover:bg-[#c29d2e] transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    <Send className="ml-2" size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;