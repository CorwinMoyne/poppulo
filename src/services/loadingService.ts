import { Subject } from "rxjs";

const isLoadingSubject$ = new Subject<boolean>();
export const isLoading$ = isLoadingSubject$.asObservable();

export const setIsLoading = (isLoading: boolean) => {
  isLoadingSubject$.next(isLoading);
};
