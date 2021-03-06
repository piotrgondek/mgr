<?php
    session_start();

    if(empty($_SESSION['basket'])) {
        $_SESSION['basket']['id'] = md5('myBasket');
        $_SESSION['basket']['amount'] = 0;
        $_SESSION['basket']['quantity'] = 0;
    }
?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>App 1: common way</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<div class="main-container">
    <div class="header-container">
        <div class="header">
            <div class="logo"></div>
            <div class="search">
                <input class="search-item" name="search"/>
                <input class="search-btn" type="submit" value="Search"/>
            </div>
            <div class="important-links"></div>
            <div class="trolley">
                <div class="amount">$<?php echo $_SESSION['basket']['amount']; ?></div>
                <div class="quantity"><?php echo $_SESSION['basket']['quantity']; ?> items</div>
            </div>
        </div>
    </div>
    <div class="content-container">
        <div class="content">
            <div class="bread-crumbs"></div>
            <div class="product">
                <div class="img-container">
                    <div class="img-thumbnail">
                        <a href="?image=sigma01.jpg">
                            <img src="img/product/sigma01.jpg"/>
                        </a>
                        <a href="?image=sigma02.jpg">
                            <img src="img/product/sigma02.jpg"/>
                        </a>
                        <a href="?image=sigma03.jpg">
                            <img src="img/product/sigma03.jpg"/>
                        </a>
                        <a href="?image=sigma04.jpg">
                            <img src="img/product/sigma04.jpg"/>
                        </a>
                        <a href="?image=sigma05.jpg">
                            <img src="img/product/sigma05.jpg"/>
                        </a>
                        <a href="?image=sigma06.jpg">
                            <img src="img/product/sigma06.jpg"/>
                        </a>
                    </div>
                    <img class="full-img" src="img/product/<?php echo $_GET['image'] ? $_GET['image'] : 'sigma01.jpg' ?>"/>
                </div>
                <div class="product-description">
                    <h1>Sigma 210306 18-35mm F1.8 DC HSM Lens for Nikon APS-C DSLRs (Black)</h1>

                    <h2>by Sigma</h2>
                    <hr/>
                    <span class="price">Price <span class="amount">$799</span> and <strong>free
                        shipping</strong>.</span>
                    <span class="availability">Only 8 left in stock (more on the way).</span>
                    <ul class="features">
                        <li>18-35mm focal length</li>
                        <li>27-52.5mm equivalent focal length on APS-C cameras</li>
                        <li>F1.8 maximum aperture; F16 minimum</li>
                        <li>Ring-type ultrasonic-type AF motor with full-time manual focusing</li>
                        <li>72mm filter size</li>
                        <li>0.28 m / 11.02" minimum focus</li>
                        <li>Available in Canon EF (EF-S), Sony Alpha (DT), Nikon F (DX) mounts</li>
                    </ul>
                </div>
                <div class="action-buttons">
                    <form action="data/basket/add.php" method="post" class="product-actions">
                        <input type="hidden" name="basket_id" value="<?php echo $_SESSION['basket']['id'];?>"/>
                        <input type="hidden" class="price" name="price" value="799"/>
                        <input type="submit" value="Add to basket"/>
                    </form>
                </div>
                <div class="additional-info">
                    <div class="also-bought-block">
                        <h3>Customers Who Bought This Item Also Bought</h3>

                        <div class="also-bought-region">
                            <ul class="also-bought-items">
                                <li class="also-bought-item empty">
                                    <img class="image" src="img/alsobought/alsoBought01.jpg">
                                    <h4 class="name">Sigma 878306 USB Dock Lens Firmware for Nikon Mount Lenses (Black)</h4>
                                    <span class="price">$59.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="reviews-region">
                        <div class="reviews-block">
                            <h3>Customer Reviews</h3>

                            <div class="reviews-wrapper">
                                <ul class="reviews"></ul>
                            </div>

                            <div class="new-review">
                                <span class="add-review">Add new review</span>

                                <form action="data/review/add.php" method="post" class="review-form <?php echo $_SESSION['reviewAdded'] ? 'visible-from-server' : '' ?>">
                                    <textarea name="content" placeholder="My review..."
                                              class="review-content"></textarea>
                                    <select name="select" class="review-like">
                                        <option value="like">I like this item</option>
                                        <option value="dislike">I do not like this item</option>
                                    </select>
                                    <span class="success">Your comment will be checked by moderator.</span>
                                    <input class="send-btn" type="submit" value="Send my review!"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">footer</div>
</div>

<script id="alsoBoughtItemTmpl" type="text/html">
    <img class="image" src="<%= img %>"/>
    <h4 class="name"><%= product %></h4>
    <span class="price"><%= price %></span>
</script>
<script id="alsoBoughtPlaceholderItemTmpl" type="text/html">
    <img class="image" src="img/alsobought/alsoBought01.jpg">
    <h4 class="name">Sigma 878306 USB Dock Lens Firmware for Nikon Mount Lenses (Black)</h4>
    <span class="price">$59.00</span>
</script>
<script id="reviewItemTmpl" type="text/html">
    <span class="content"><%= content %></span>
    <span class="author">By <%= author %></span>
</script>
<script type="text/javascript" src="js/basic.min.js"></script>
<script type="text/javascript" src="js/app.min.js"></script>
<script type="text/javascript" src="js/components.min.js"></script>
</body>
</html>