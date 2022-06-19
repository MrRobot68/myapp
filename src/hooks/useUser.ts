import {useSelector} from 'react-redux';

const useUser = () => {
  return useSelector((state: any) => state.auth.user);
};

export default useUser;
