import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import {RootState} from './store'


//a hook for useDispatch
export const useAppDispatch = () =>useDispatch();

//an alias function fot using useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;