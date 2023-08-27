import Default from '@/app/layouts/DefaultLayout'
import Checkmark from '@/app/components/Checkmark'
import Services from '@/app/components/HomePage/Services'
import Hero from '@/app/components/Hero'
import WhyUs from '@/app/components/HomePage/WhyUs'
import AboutUs from '@/app/components/HomePage/AboutUs'

const Home = async () => {

  return (
    <Default>
      <Hero />
      <Services />
      <section className='px-4 flex flex-col items-center py-16 bg-bgDark/10'>
        <h2 className='text-6xl lg:text-9xl font-black'>Le process</h2>
        <div className='relative flex max-w-5xl gap-8 mt-8'>
          <div className='bg-primary w-1 h-full absolute left-[10px] -z-[1] top-0 rounded-xl'></div>
          <div className='flex-1'>
            <div className='flex gap-8 pn-8'>
              <Checkmark />
              <div>
                <h3 className='font-black'>Étape 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quo voluptate facere voluptas deleniti hic.
                </p>
              </div>
            </div>
            <div className='flex gap-8 py-8'>
              <Checkmark />
              <div>
                <h3 className='font-black'>Étape 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quo voluptate facere voluptas deleniti hic.
                </p>
              </div>
            </div>
            <div className='flex gap-8 py-8'>
              <Checkmark />
              <div>
                <h3 className='font-black'>Étape 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quo voluptate facere voluptas deleniti hic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
    {/* <AboutUs teamMembers={teamMembers ?? []}/> */}
    </Default>
  )
}

export default Home;