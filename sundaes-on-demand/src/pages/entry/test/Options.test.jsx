import { render, screen } from "@testing-library/react";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for each toppings option from server", async () => {
  render(<Options optionType="toppings" />, { wrapper: OrderDetailsProvider });

  const toppingsImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingsImages).toHaveLength(3);

  const altText = toppingsImages.map((e) => e.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
