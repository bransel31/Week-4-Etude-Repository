let names = [
  {first_name: 'Xrandon', last_name: 'Seliga'},
  {first_name: 'Lauren', last_name: 'Seliga'},
  {first_name: 'Avery', last_name: 'Apples'}]

  function compare(a,b) {
    if(a.last_Name < b.last_name)
    return -1;
    if(a.last_name > b.last_name)
    return 1;
    if(a.last_Name == b.last_Name)
      if(a.first_name < b.first_name)
      return -1
      if(a.first_name > b.first_name)
      return 1
    return 0;
  }

  names.sort(compare)
  console.log(names)
