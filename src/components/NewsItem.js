

const NewsItem =(props) => {


    let {title , description, url, newsId , author ,date,source} = props;

    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>

        {/* Applying badge on the top of the card */}
        <div style={{
          display : 'flex',
          justifyContent : 'flex-end',
          position : 'absolute',
          right: '0'
        }}>
        <span className="badge rounded-pill bg-danger" >{source}
        </span>
        </div>
        
          <img src={!url?"https://png.pngtree.com/png-clipart/20190505/ourmid/pngtree-vector-creative-breaking-news-banner-png-image_999268.jpg":url} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className='text-muted'>By {!author?"Unknown" : author} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsId} className="btn btn-sm btn-dark" target='_blank'>Read More</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem;
