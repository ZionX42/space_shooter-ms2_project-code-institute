// Adding waypoint class for enemies direction memicing
class Waypoint {
    constructor(x,y,dir_x,dir_y) {
        this.point = new Point(x, y);
        this.dir_x = dir_x;
        this.dir_y = dir_y;
    }
}

// Initial code cited from: bluefeversoft, https://github.com/bluefeversoft/html_invaders