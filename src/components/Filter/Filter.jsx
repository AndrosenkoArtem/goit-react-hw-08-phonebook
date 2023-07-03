import { H2, Input } from './Filter.styled';
import { setFilterName } from 'redux/filter/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  return (
    <>
      <H2>Find by Name</H2>
      <Input
        onChange={e => dispatch(setFilterName(e.currentTarget.value))}
        value={filterValue.filter}
        type="text"
        name="filter"
      />
    </>
  );
};
