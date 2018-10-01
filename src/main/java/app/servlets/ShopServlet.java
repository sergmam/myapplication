package app.servlets;

import app.entities.Item;
import app.model.Items;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by Сергей on 29.09.2018.
 */
@WebServlet("/myapp/shop")
public class ShopServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("/shop.html");
        requestDispatcher.forward(req, resp);    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String itemName = req.getParameter("itemName");
        String countItem = req.getParameter("countItem");
        Item item = new Item(itemName, countItem);
        Items items = Items.getInstance();
        items.add(item);    }
}
