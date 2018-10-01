package app.model;

import app.entities.Item;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Сергей on 29.09.2018.
 */
public class Items {

    private static Items instance = new Items();

    private List<Item> items;

    public static Items getInstance() {
        return instance;
    }

    private Items() {
        items = new ArrayList<>();
    }

    public void add(Item item) {
        items.add(item);
    }

    public List<String> list() {

        return items.stream()
                .map(Item::getNameItem)
                .collect(Collectors.toList());
    }
}
