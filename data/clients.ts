export interface Client {
  id: string
  name: string
  color?: "red" | "green" | "yellow" | "gray" | "default"
  phone?: string
  address?: string
}

export const clients: Client[] = [
  {
    id: "1",
    name: "Агрокомплект",
    color: "red",
    phone: "+7-777-999-88-77",
    address: "101000, Россия, Москва город...",
  },
  {
    id: "2",
    name: "АгроПром Посев",
    color: "green",
    phone: "+78998765432",
    address: "109382, Россия, Москва город...",
  },
  {
    id: "3",
    name: "Клиент Omniintegro",
    color: undefined,
    phone: "",
    address: "",
  },
  {
    id: "4",
    name: "РестоХолдинг",
    color: "yellow",
    phone: "",
    address: "55.3918737, 38.2632172",
  },
  {
    id: "5",
    name: "Супер Логистик Плюс",
    color: "red",
    phone: "+78999988822",
    address: "г Москва, поселок Толстопал...",
  },
]
