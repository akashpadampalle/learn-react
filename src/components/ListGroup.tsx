function ListGroup() {

    const items = [
        'New Delhi',
        'New Mumbai',
        'Kolkata',
        'Surat',
        'Tamil Nadu'
    ];



  return (
    <>
        <h1>List Title</h1>
        <ul className="list-group">
          {items.map((item, index) => <li className="list-group-item" key={index}>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;


