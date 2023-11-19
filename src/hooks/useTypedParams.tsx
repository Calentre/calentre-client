import { RouteParams } from '@/types/routeParams';
import { useParams } from 'next/navigation';

export const useTypedParams = () => useParams<RouteParams>();
