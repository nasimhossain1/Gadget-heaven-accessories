import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="bg-white shadow rounded-3xl p-10 max-w-xl text-center">
        <h1 className="text-6xl font-bold text-purple-600">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>

        <p className="text-gray-600 mt-3">
          The page you are looking for doesn’t exist or was moved.
        </p>

        {error?.statusText && (
          <p className="text-sm text-gray-500 mt-2">
            Error: {error.statusText}
          </p>
        )}

        <Link
          to="/"
          className="inline-block mt-7 px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
