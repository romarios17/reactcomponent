// TODO: import the right dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// TODO: code the Article component
const Article = (props) => {
return (
    <div className="article">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>
    );
};




// TODO: export your Article component for tests
export default Article;
document.getElementById('root');
ReactDOM.render(<Article title="BREAKING NEWS" body='HAPPY HOUSE?'/>, root); 