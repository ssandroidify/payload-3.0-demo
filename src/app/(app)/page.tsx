import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'
import Link from 'next/link'
// import ProductReel from '@/components/ProductReel'

const perks = [
  {
    name: 'Sunt minim aute est nisi in fugiat.',
    icon: ArrowDownToLine,
    description:
      'Veniam ex proident anim exercitation sit minim veniam reprehenderit sunt laborum ipsum reprehenderit enim ex.',
  },
  {
    name: 'Consectetur reprehenderit quis labore magna excepteur.',
    icon: CheckCircle,
    description:
      'Laborum deserunt laborum nostrud deserunt Lorem. Anim duis eu sit in laborum consequat voluptate qui ad fugiat.',
  },
  {
    name: 'Sint sint occaecat ullamco adipisicing nisi cupidatat.',
    icon: Leaf,
    description:
      'Minim eu Lorem ad fugiat labore. Officia aliqua sit deserunt incididunt duis consectetur eu reprehenderit. Et laborum nulla in magna pariatur consectetur.',
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Heartfulness <span className="text-green-600">Bhopal</span>
          </h1>

          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to HFN-BPL , Showcasing all the Heartfulness sessions happening in Bhopal and
            nearby.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={'/articles'} className={buttonVariants()}>
              Browse latest
            </Link>
            <Link href={'/admin/collections/articles/create'}>
              <Button variant="ghost">Upload &rarr;</Button>
            </Link>
          </div>
        </div>

        {/* <ProductReel title="Latest articles" href="/articles" query={{ sort: 'desc', limit: 4 }} /> */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((item) => (
              <div
                key={item.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<item.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className="flex flex-col mt-4 mb-4 items-center">
        <h3 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Find us here</h3>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.649009004605!2d77.52575230195234!3d23.255856143049243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4025fa7d32d1%3A0x4e2bebbb45f4977d!2sSRCM%20Heartfulness%20Meditation%20Centre!5e0!3m2!1sen!2sin!4v1716996081062!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
        />
      </MaxWidthWrapper>
    </>
  )
}
