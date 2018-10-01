package app.entities;

/**
 * Created by Сергей on 29.09.2018.
 */
public class Item {
    String nameItem;
    int countItem;
    float price;

    public Item(String itemName, String countItem) {
    }

    public String getNameItem() {
        return nameItem;
    }

    public void setNameItem(String nameItem) {
        this.nameItem = nameItem;
    }

    public int getCountItem() {
        return countItem;
    }

    public void setCountItem(int countItem) {
        this.countItem = countItem;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Item{" +
                "nameItem='" + nameItem + '\'' +
                ", countItem=" + countItem +
                ", price=" + price +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Item item = (Item) o;

        if (countItem != item.countItem) return false;
        if (Float.compare(item.price, price) != 0) return false;
        return nameItem != null ? nameItem.equals(item.nameItem) : item.nameItem == null;
    }

    @Override
    public int hashCode() {
        int result = nameItem != null ? nameItem.hashCode() : 0;
        result = 31 * result + countItem;
        result = 31 * result + (price != +0.0f ? Float.floatToIntBits(price) : 0);
        return result;
    }
}
