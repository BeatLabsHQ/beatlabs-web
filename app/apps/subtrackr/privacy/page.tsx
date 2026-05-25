'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

type Lang = 'en' | 'es'

const content: Record<Lang, { title: string; subtitle: string; updated: string; intro: string; sections: { title: string; content: string }[] }> = {
  en: {
    title: 'Privacy Policy',
    subtitle: 'CURB · LEGAL',
    updated: 'Last updated: March 28, 2026',
    intro: 'Beat Labs ("we", "our", or "us") operates the Curb mobile application (the "App"). This Privacy Policy explains how we collect, use, and protect your information when you use the App.',
    sections: [
      {
        title: '1. Information We Collect',
        content: `1.1 Account Information

When you sign in using Apple Sign In or Google Sign In, we receive:
• Your email address
• Your display name (if provided)
• A unique user identifier assigned by the authentication provider

We do not receive or store your password. Authentication is handled entirely by Apple or Google.

1.2 Subscription Data

The App allows you to manually enter information about your personal subscriptions, including:
• Subscription name, price, currency, and billing cycle
• Category, status, and renewal dates
• Optional notes

This data is stored locally on your device and, if you are signed in, synced to our cloud database (Google Firebase Firestore) to enable access across multiple devices.

1.3 Purchase Information

If you subscribe to Curb Pro, your purchase is processed entirely by Apple (App Store) or Google (Google Play). We do not collect or store your payment method, credit card number, or billing address. We only receive confirmation of whether you have an active subscription.

1.4 Referral and Promotional Data

If you participate in our referral program or redeem a promotional code, we store:
• Your referral code
• The number of referrals you have made
• Promotional code redemption status

1.5 Automatically Collected Data

We do NOT use analytics SDKs, advertising trackers, or third-party data collection tools. We do not collect device identifiers, IP addresses, or usage analytics.`,
      },
      {
        title: '2. How We Use Your Information',
        content: `We use the information we collect solely to:
• Provide and maintain the App's functionality
• Sync your subscription data across your devices
• Manage your Curb Pro subscription status
• Process referral rewards and promotional codes
• Send you local push notifications about upcoming renewals (only if you enable notifications)

We do NOT sell, rent, or share your personal information with third parties for marketing or advertising purposes.`,
      },
      {
        title: '3. Data Storage and Security',
        content: `• Local storage: Your subscription data is stored on your device using the operating system's secure database.
• Cloud storage: If signed in, your data is stored in Google Firebase Firestore, hosted in secure data centers with encryption at rest and in transit.
• Authentication tokens: Managed by Firebase Authentication with industry-standard security practices.

We implement appropriate technical and organizational measures to protect your data. However, no method of electronic storage is 100% secure.`,
      },
      {
        title: '4. Data Retention',
        content: `• Your data is retained as long as your account is active.
• If you delete your account through the App, all associated cloud data (subscriptions, referral data) is permanently deleted.
• Local data on your device is removed when you uninstall the App.`,
      },
      {
        title: '5. Your Rights',
        content: `You have the right to:
• Access your data at any time through the App
• Export your data in JSON or CSV format using the App's export feature
• Delete your account and all associated data through the App's Settings
• Opt out of cloud sync by using the App without signing in`,
      },
      {
        title: "6. Children's Privacy",
        content: `The App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.`,
      },
      {
        title: '7. Third-Party Services',
        content: `The App uses the following third-party services:
• Firebase Authentication (Google LLC) — for user sign-in
• Firebase Firestore (Google LLC) — for cloud data storage
• Apple Sign In (Apple Inc.) — for authentication on iOS
• Frankfurter API — for currency exchange rates (no personal data is sent)

Each service is governed by its own privacy policy.`,
      },
      {
        title: '8. Changes to This Policy',
        content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last updated" date at the top of this page.`,
      },
      {
        title: '9. Contact Us',
        content: `If you have questions about this Privacy Policy, please contact us at:

Beat Labs
Email: privacy@beatlabs.ae
Website: https://beatlabs.ae`,
      },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    subtitle: 'CURB · LEGAL',
    updated: 'Última actualización: 28 de marzo de 2026',
    intro: 'Beat Labs ("nosotros", "nuestro") opera la aplicación móvil Curb (la "App"). Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información cuando utilizas la App.',
    sections: [
      {
        title: '1. Información que Recopilamos',
        content: `1.1 Información de Cuenta

Cuando inicias sesión con Apple Sign In o Google Sign In, recibimos:
• Tu dirección de correo electrónico
• Tu nombre (si lo proporcionas)
• Un identificador único de usuario asignado por el proveedor de autenticación

No recibimos ni almacenamos tu contraseña. La autenticación es gestionada íntegramente por Apple o Google.

1.2 Datos de Suscripciones

La App te permite introducir manualmente información sobre tus suscripciones personales, incluyendo:
• Nombre, precio, moneda y ciclo de facturación
• Categoría, estado y fechas de renovación
• Notas opcionales

Estos datos se almacenan localmente en tu dispositivo y, si has iniciado sesión, se sincronizan con nuestra base de datos en la nube (Google Firebase Firestore).

1.3 Información de Compras

Si te suscribes a Curb Pro, tu compra es procesada íntegramente por Apple (App Store) o Google (Google Play). No recopilamos ni almacenamos tu método de pago, número de tarjeta ni dirección de facturación. Solo recibimos confirmación de si tienes una suscripción activa.

1.4 Datos de Referidos y Promociones

Si participas en nuestro programa de referidos o canjeas un código promocional, almacenamos:
• Tu código de referido
• El número de referidos que has realizado
• El estado de canje de códigos promocionales

1.5 Datos Recopilados Automáticamente

NO utilizamos SDKs de analítica, rastreadores publicitarios ni herramientas de recopilación de datos de terceros. No recopilamos identificadores de dispositivo, direcciones IP ni analíticas de uso.`,
      },
      {
        title: '2. Cómo Usamos tu Información',
        content: `Utilizamos la información recopilada únicamente para:
• Proporcionar y mantener la funcionalidad de la App
• Sincronizar tus datos de suscripciones entre dispositivos
• Gestionar tu estado de suscripción a Curb Pro
• Procesar recompensas de referidos y códigos promocionales
• Enviarte notificaciones locales sobre renovaciones próximas (solo si activas las notificaciones)

NO vendemos, alquilamos ni compartimos tu información personal con terceros con fines de marketing o publicidad.`,
      },
      {
        title: '3. Almacenamiento y Seguridad de Datos',
        content: `• Almacenamiento local: Tus datos de suscripciones se almacenan en tu dispositivo usando la base de datos segura del sistema operativo.
• Almacenamiento en la nube: Si has iniciado sesión, tus datos se almacenan en Google Firebase Firestore, alojado en centros de datos seguros con cifrado en reposo y en tránsito.
• Tokens de autenticación: Gestionados por Firebase Authentication con prácticas de seguridad estándar de la industria.

Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos. Sin embargo, ningún método de almacenamiento electrónico es 100% seguro.`,
      },
      {
        title: '4. Retención de Datos',
        content: `• Tus datos se conservan mientras tu cuenta esté activa.
• Si eliminas tu cuenta a través de la App, todos los datos asociados en la nube se eliminan permanentemente.
• Los datos locales en tu dispositivo se eliminan al desinstalar la App.`,
      },
      {
        title: '5. Tus Derechos',
        content: `Tienes derecho a:
• Acceder a tus datos en cualquier momento a través de la App
• Exportar tus datos en formato JSON o CSV usando la función de exportación de la App
• Eliminar tu cuenta y todos los datos asociados a través de los Ajustes de la App
• Optar por no sincronizar en la nube usando la App sin iniciar sesión`,
      },
      {
        title: '6. Privacidad de Menores',
        content: `La App no está destinada a menores de 13 años. No recopilamos conscientemente información personal de menores de 13 años.`,
      },
      {
        title: '7. Servicios de Terceros',
        content: `La App utiliza los siguientes servicios de terceros:
• Firebase Authentication (Google LLC) — para el inicio de sesión
• Firebase Firestore (Google LLC) — para almacenamiento de datos en la nube
• Apple Sign In (Apple Inc.) — para autenticación en iOS
• Frankfurter API — para tipos de cambio de divisas (no se envían datos personales)

Cada servicio se rige por su propia política de privacidad.`,
      },
      {
        title: '8. Cambios en esta Política',
        content: `Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos de cualquier cambio significativo actualizando la fecha de "Última actualización" en la parte superior de esta página.`,
      },
      {
        title: '9. Contacto',
        content: `Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:

Beat Labs
Email: privacy@beatlabs.ae
Web: https://beatlabs.ae`,
      },
    ],
  },
}

export default function SubtrackrPrivacyPage() {
  const [lang, setLang] = useState<Lang>('en')
  const c = content[lang]

  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        background: 'rgba(8,8,8,0.92)',
        backdropFilter: 'blur(12px)',
      }}>
        <Link href="/">
          <img src="/logo.png" alt="beatLabs" style={{ height: '1.8rem', width: 'auto', cursor: 'pointer' }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {/* Lang toggle */}
          <div style={{ display: 'flex', border: '1px solid rgba(255,255,255,0.12)', overflow: 'hidden' }}>
            {(['en', 'es'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                fontFamily: 'var(--font-syne)', fontSize: '0.6rem', letterSpacing: '0.15em', fontWeight: 700,
                padding: '0.4rem 0.9rem', border: 'none', cursor: 'pointer',
                background: lang === l ? 'var(--lime)' : 'transparent',
                color: lang === l ? 'var(--black)' : 'var(--muted)',
                transition: 'all 0.2s',
              }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <Link href="/apps/subtrackr" style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
            ← CURB
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '10rem 2.5rem 4rem', maxWidth: '860px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '2rem', height: '1px', background: 'var(--lime)' }} />
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>{c.subtitle}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '1.5rem' }}>
            {lang === 'en' ? <>Privacy<br /><span style={{ color: 'var(--lime)' }}>Policy.</span></> : <>Política de<br /><span style={{ color: 'var(--lime)' }}>Privacidad.</span></>}
          </h1>
          <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-syne)', color: 'var(--muted)', letterSpacing: '0.15em' }}>
            {c.updated}
          </span>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.95rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7, maxWidth: '640px', marginTop: '1.5rem' }}>
            {c.intro}
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: '0 2.5rem 8rem', maxWidth: '860px' }}>
        <div>
          {c.sections.map((section, i) => (
            <motion.div
              key={`${lang}-${section.title}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem 0' }}
            >
              <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.6rem', letterSpacing: '0.05em', color: 'var(--white)', marginBottom: '1.2rem' }}>
                {section.title}
              </h2>
              <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.9, whiteSpace: 'pre-line' }}>
                {section.content}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '3rem 2.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <span style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)' }}>
          © 2026 beatLabs — Dubai, UAE
        </span>
        <a href="mailto:privacy@beatlabs.ae" style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)', textDecoration: 'none' }}>
          privacy@beatlabs.ae
        </a>
      </footer>

    </main>
  )
}
