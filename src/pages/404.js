import SEO from '../components/SEO';

const ErrorPage = () => {
  return (
    <>
      <SEO
        title={'Error404'}
        description="Portfolio error page, navigation Error"
      />

      <section className="h-full w-screen lg:w-full flex-col items-end justify-end  relative">
        <div className="flex w-screen lg:w-full h-screen  justify-center flex-col lg:pl-16">
          <p className="text-white text-5xl ">
            Error <span className="text-rose-500">404</span>{' '}
          </p>

          <p className="text-white text-5xl">
            Seems like you are <span className="text-rose-500">Lost</span>{' '}
          </p>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
