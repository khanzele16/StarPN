import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type TModalSearchParams = 'modal';

export const useSearchAppParams = <T extends string = TModalSearchParams>() => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isAddAction = useCallback(
    (action: 'add' | 'remove', searchParams: Array<[T, string]> | T[]): searchParams is Array<[T, string]> => {
      return action === 'add';
    },
    []
  );

  type EditSearchParams = {
    (action: 'add', searchParams: Array<[T, string]>): void;
    (action: 'remove', searchParams: T[]): void;
  };

  const editSearchParams = useCallback<EditSearchParams>(
    (action, searchParams) => {
      const params = new URLSearchParams(window.location.search);

      if (isAddAction(action, searchParams)) {
        searchParams.forEach(([searchParam, value]) => {
          if (!value) {
            console.warn(`Value is required for "add" action with param: ${searchParam}`);
            return;
          }
          params.set(searchParam, value);
        });
      } else {
        searchParams.forEach(searchParam => {
          params.delete(searchParam);
        });
      }

      const newSearch = params.toString();
      router.push(`${pathname}${newSearch ? `?${newSearch}` : ''}`);
    },
    [isAddAction, pathname, router]
  );

  const getSearchParamValue = useCallback(
    (searchParam: T) => {
      return searchParams.get(searchParam) || false;
    },
    [searchParams]
  );

  const hasSearchParam = useCallback(
    (searchParam: T) => {
      return searchParams.has(searchParam);
    },
    [searchParams]
  );

  return { editSearchParams, getSearchParamValue, hasSearchParam, appSearchParams: searchParams };
};
