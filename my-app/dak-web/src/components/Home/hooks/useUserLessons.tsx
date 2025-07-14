import { useQuery } from '@tanstack/react-query';
import * as api from '../../../../api/lessons';
import { Lesson } from '../../../../../sharedTypes/lesson';

export function useGetUserLessons({ userId }: { userId: string }) {
	return useQuery<unknown, unknown, Lesson[]>({
		queryKey: ['userLessons', userId],
		queryFn: async () => {
			const resp = await api.getUserLessons(userId);
			if (!resp.ok) {
				throw new Error('Failed to fetch user lessons');
			}
			const entries = await resp.json();
			return entries?.data;
		},
		enabled: !!userId,
		staleTime: 1000 * 60 * 4, // 4 minutes
		refetchOnWindowFocus: false,
	});
}
