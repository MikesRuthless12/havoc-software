import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      <Button asChild className="bg-black hover:bg-gray-800 text-white">
        <Link to="/">Return to Homepage</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;

