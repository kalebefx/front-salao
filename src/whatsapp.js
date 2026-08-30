// Troque pelo número real do salão (formato: DDI + DDD + número, só dígitos)
export const WHATSAPP_NUMBER = '5562900000000'

export function buildWhatsappLink(message = 'Olá! Gostaria de agendar um horário no Eula Moraes Studio.') {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}
