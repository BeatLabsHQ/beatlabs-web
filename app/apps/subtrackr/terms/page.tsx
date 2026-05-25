'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

type Lang = 'en' | 'es'

const content: Record<Lang, { title: string; updated: string; intro: string; sections: { title: string; content: string }[] }> = {
  en: {
    title: 'Terms of Service',
    updated: 'Last updated: March 28, 2026',
    intro: 'These Terms of Service ("Terms") govern your use of the Curb mobile application (the "App") operated by Beat Labs ("we", "our", or "us"). By downloading, installing, or using the App, you agree to be bound by these Terms.',
    sections: [
      {
        title: '1. Description of Service',
        content: `Curb is a personal subscription management tool that allows you to:
• Track and organize your recurring subscriptions
• Receive renewal reminders via push notifications
• View spending summaries and analytics
• Export your subscription data

The App is available in a free tier and a paid tier (Curb Pro).`,
      },
      {
        title: '2. Accounts',
        content: `2.1 Registration

You may use the App without creating an account. To access cloud sync and certain features, you can sign in using Apple Sign In or Google Sign In.

2.2 Account Security

You are responsible for maintaining the security of your authentication credentials. We are not liable for any unauthorized access to your account.

2.3 Account Deletion

You may delete your account at any time through the App's Settings. This will permanently remove all your cloud-stored data.`,
      },
      {
        title: '3. Subscriptions and Payments',
        content: `3.1 Free Tier

The free tier allows you to track up to 5 subscriptions at no cost.

3.2 Curb Pro

Curb Pro is available as a monthly or yearly subscription.

3.3 Billing

All payments are processed through the Apple App Store or Google Play Store. By subscribing, you agree to their respective terms and conditions.

3.4 Auto-Renewal

Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period. You can manage and cancel your subscription through your device's App Store or Play Store settings.

3.5 Refunds

Refund requests are handled by Apple or Google according to their respective refund policies.

3.6 Promotional Codes

We may issue one-time promotional codes that grant temporary or permanent Pro access. Each code is single-use and non-transferable. We reserve the right to revoke promotional access at our discretion.

3.7 Referral Program

Users may earn Pro access through our referral program. Every 20 successful referrals grant 1 month of Pro access. We reserve the right to modify or discontinue the referral program at any time.`,
      },
      {
        title: '4. User Data',
        content: `4.1 Your Content

All subscription data you enter into the App remains your property. We do not claim ownership over your data.

4.2 Data Accuracy

The App relies on data you manually enter. We are not responsible for inaccurate information, missed renewals, or financial decisions based on the App's data.

4.3 Currency Conversion

Exchange rates are provided for informational purposes only and may not reflect real-time market rates. We are not responsible for discrepancies in currency conversion.`,
      },
      {
        title: '5. Acceptable Use',
        content: `You agree not to:
• Use the App for any illegal purpose
• Attempt to reverse-engineer, decompile, or disassemble the App
• Attempt to gain unauthorized access to our systems or other users' data
• Use automated systems to access the App
• Abuse the referral or promotional code systems`,
      },
      {
        title: '6. Intellectual Property',
        content: `The App, including its design, code, graphics, and content, is owned by Beat Labs and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the App.`,
      },
      {
        title: '7. Disclaimer of Warranties',
        content: `The App is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or free of harmful components.`,
      },
      {
        title: '8. Limitation of Liability',
        content: `To the maximum extent permitted by law, Beat Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App, including but not limited to:
• Loss of data
• Financial losses from missed renewals
• Interruption of service

Our total liability shall not exceed the amount you paid for Curb Pro in the 12 months preceding the claim.`,
      },
      {
        title: '9. Changes to These Terms',
        content: `We reserve the right to modify these Terms at any time. We will notify you of material changes by updating the "Last updated" date. Your continued use of the App after changes constitutes acceptance of the new Terms.`,
      },
      {
        title: '10. Governing Law',
        content: `These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates.`,
      },
      {
        title: '11. Contact Us',
        content: `If you have questions about these Terms, please contact us at:

Beat Labs
Email: legal@beatlabs.ae
Website: https://beatlabs.ae`,
      },
    ],
  },
  es: {
    title: 'Términos de Servicio',
    updated: 'Última actualización: 28 de marzo de 2026',
    intro: 'Estos Términos de Servicio ("Términos") regulan el uso de la aplicación móvil Curb (la "App") operada por Beat Labs ("nosotros", "nuestro"). Al descargar, instalar o utilizar la App, aceptas quedar vinculado por estos Términos.',
    sections: [
      {
        title: '1. Descripción del Servicio',
        content: `Curb es una herramienta de gestión de suscripciones personales que te permite:
• Registrar y organizar tus suscripciones recurrentes
• Recibir recordatorios de renovación mediante notificaciones push
• Consultar resúmenes de gastos y analíticas
• Exportar tus datos de suscripciones

La App está disponible en un plan gratuito y un plan de pago (Curb Pro).`,
      },
      {
        title: '2. Cuentas',
        content: `2.1 Registro

Puedes usar la App sin crear una cuenta. Para acceder a la sincronización en la nube y ciertas funcionalidades, puedes iniciar sesión con Apple Sign In o Google Sign In.

2.2 Seguridad de la Cuenta

Eres responsable de mantener la seguridad de tus credenciales de autenticación. No somos responsables de accesos no autorizados a tu cuenta.

2.3 Eliminación de Cuenta

Puedes eliminar tu cuenta en cualquier momento desde los Ajustes de la App. Esto eliminará permanentemente todos tus datos almacenados en la nube.`,
      },
      {
        title: '3. Suscripciones y Pagos',
        content: `3.1 Plan Gratuito

El plan gratuito te permite registrar hasta 5 suscripciones sin coste.

3.2 Curb Pro

Curb Pro está disponible como suscripción mensual o anual.

3.3 Facturación

Todos los pagos son procesados a través de Apple App Store o Google Play Store. Al suscribirte, aceptas sus términos y condiciones respectivos.

3.4 Renovación Automática

Las suscripciones se renuevan automáticamente a menos que se cancelen al menos 24 horas antes del final del periodo de facturación actual. Puedes gestionar y cancelar tu suscripción desde los ajustes de la App Store o Play Store de tu dispositivo.

3.5 Reembolsos

Las solicitudes de reembolso son gestionadas por Apple o Google según sus respectivas políticas de reembolso.

3.6 Códigos Promocionales

Podemos emitir códigos promocionales de un solo uso que otorgan acceso Pro temporal o permanente. Cada código es de un solo uso e intransferible. Nos reservamos el derecho de revocar el acceso promocional a nuestra discreción.

3.7 Programa de Referidos

Los usuarios pueden obtener acceso Pro a través de nuestro programa de referidos. Cada 20 referidos exitosos otorgan 1 mes de acceso Pro. Nos reservamos el derecho de modificar o discontinuar el programa de referidos en cualquier momento.`,
      },
      {
        title: '4. Datos del Usuario',
        content: `4.1 Tu Contenido

Todos los datos de suscripciones que introduces en la App siguen siendo de tu propiedad. No reclamamos propiedad sobre tus datos.

4.2 Exactitud de los Datos

La App depende de los datos que introduces manualmente. No somos responsables de información inexacta, renovaciones perdidas o decisiones financieras basadas en los datos de la App.

4.3 Conversión de Divisas

Los tipos de cambio se proporcionan únicamente con fines informativos y pueden no reflejar los tipos de mercado en tiempo real. No somos responsables de discrepancias en la conversión de divisas.`,
      },
      {
        title: '5. Uso Aceptable',
        content: `Te comprometes a no:
• Usar la App con fines ilegales
• Intentar aplicar ingeniería inversa, descompilar o desensamblar la App
• Intentar obtener acceso no autorizado a nuestros sistemas o datos de otros usuarios
• Usar sistemas automatizados para acceder a la App
• Abusar del sistema de referidos o códigos promocionales`,
      },
      {
        title: '6. Propiedad Intelectual',
        content: `La App, incluyendo su diseño, código, gráficos y contenido, es propiedad de Beat Labs y está protegida por leyes de propiedad intelectual. No puedes copiar, modificar, distribuir ni crear obras derivadas basadas en la App.`,
      },
      {
        title: '7. Exención de Garantías',
        content: `La App se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo, ya sean expresas o implícitas. No garantizamos que la App sea ininterrumpida, libre de errores o libre de componentes dañinos.`,
      },
      {
        title: '8. Limitación de Responsabilidad',
        content: `En la máxima medida permitida por la ley, Beat Labs no será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos derivados de tu uso de la App, incluyendo pero no limitado a:
• Pérdida de datos
• Pérdidas financieras por renovaciones no detectadas
• Interrupción del servicio

Nuestra responsabilidad total no excederá el importe que hayas pagado por Curb Pro en los 12 meses anteriores a la reclamación.`,
      },
      {
        title: '9. Cambios en estos Términos',
        content: `Nos reservamos el derecho de modificar estos Términos en cualquier momento. Te notificaremos de cambios significativos actualizando la fecha de "Última actualización". Tu uso continuado de la App tras los cambios constituye aceptación de los nuevos Términos.`,
      },
      {
        title: '10. Legislación Aplicable',
        content: `Estos Términos se regirán e interpretarán de acuerdo con las leyes de los Emiratos Árabes Unidos.`,
      },
      {
        title: '11. Contacto',
        content: `Si tienes preguntas sobre estos Términos, contáctanos en:

Beat Labs
Email: legal@beatlabs.ae
Web: https://beatlabs.ae`,
      },
    ],
  },
}

export default function SubtrackrTermsPage() {
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
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>CURB · LEGAL</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '1.5rem' }}>
            {lang === 'en' ? <>Terms of<br /><span style={{ color: 'var(--lime)' }}>Service.</span></> : <>Términos de<br /><span style={{ color: 'var(--lime)' }}>Servicio.</span></>}
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
        <a href="mailto:legal@beatlabs.ae" style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)', textDecoration: 'none' }}>
          legal@beatlabs.ae
        </a>
      </footer>

    </main>
  )
}
