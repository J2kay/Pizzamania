function Carousel(){
    return (
        <div>
             <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner carousel-content">
            <div class="carousel-item active">
              <img
                src="images/Car4.jpg"
                class="d-block w-100"
                alt="pizza"
                width="100%"
                
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/Car2.jpg"
                className="d-block w-100"
                alt="pizza"
                width="100%"
                
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/Car3.jpg"
                class="d-block w-100"
                alt="pizza"
                width="100%"
                
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
        </div>
    )
}
export default Carousel